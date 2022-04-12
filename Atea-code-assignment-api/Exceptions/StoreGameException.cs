using System;

namespace Atea_code_assignment_api.Exceptions
{
    public class StoreGameException : Exception
    {
        public StoreGameException(string message) : base(message) { }
    }
}
