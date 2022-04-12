using Microsoft.AspNetCore.Http;
using System.Threading.Tasks;
using System;
using Serilog;
using System.Net;

namespace Atea_code_assignment_api.Middlewares
{
    public class CustomExceptionHandlingMiddleware
    {
        private readonly RequestDelegate _next;

        public CustomExceptionHandlingMiddleware(RequestDelegate next)
        {
            _next = next;
        }

        public async Task InvokeAsync(HttpContext context)
        {
            try
            {
                await _next(context);
            }
            catch (Exception e)
            {
                await HandleGlobalExceptionAsync(context, e);
            }
        }

        private Task HandleGlobalExceptionAsync(HttpContext context, Exception exception) 
        {
            if (exception is ApplicationException)
            {
                Log.Warning($"Validation error occured in API. {exception.Message}");
                context.Response.StatusCode = (int)HttpStatusCode.BadRequest;
                return context.Response.WriteAsJsonAsync(new { exception.Message });
            }
            else
            {
                var errorId = Guid.NewGuid().ToString();
                Log.Error(exception, $"Error occured in API: {errorId}");
                context.Response.StatusCode = (int)HttpStatusCode.InternalServerError;
                return context.Response.WriteAsJsonAsync(new
                {
                    ErrorId = errorId,
                    Message = "Something bad happened in our API. Contact our support team with the ErrorId if the issue persists."
                });
            }
        }
    }
}
