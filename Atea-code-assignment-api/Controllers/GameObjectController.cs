using Atea_code_assignment_api.Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Atea_code_assignment_api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GameObjectController : ControllerBase
    {

        [HttpGet]
        public ActionResult<string> ListGames(string search)
        {
            return search;
        }

        [HttpGet("{id}")]
        public ActionResult<string> LoadGame(string id)
        {
            return id;
        }

        [HttpPost]
        public ActionResult<bool> StoreGame([FromBody] GameObject gameObject)
        {
            if (gameObject.Id.Equals("ABC-123"))
            {
                return true;
            }
            return false;
        }
    }
}
