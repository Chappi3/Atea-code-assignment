using Atea_code_assignment_api.Entities;
using Atea_code_assignment_api.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace Atea_code_assignment_api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GameObjectController : ControllerBase
    {
        private readonly IGameObjectService _gameObjectService;

        public GameObjectController(IGameObjectService gameObjectService)
        {
            _gameObjectService = gameObjectService;
        }

        [HttpGet]
        public ActionResult<List<GameObject>> ListGames(string search)
        {
            return _gameObjectService.ListGames();
        }

        [HttpGet("{id}")]
        public ActionResult<GameObject> LoadGame(string id)
        {
            return _gameObjectService.LoadGame(id);
        }

        [HttpPost]
        public ActionResult<bool> StoreGame([FromBody] GameObject gameObject)
        {
            return _gameObjectService.StoreGame(gameObject);
        }
    }
}
