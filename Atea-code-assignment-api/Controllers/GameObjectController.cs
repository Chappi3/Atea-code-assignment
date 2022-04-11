using Atea_code_assignment_api.Entities;
using Atea_code_assignment_api.Interfaces;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

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
        public async Task<ActionResult<List<GameObject>>> ListGames(string search)
        {
            return await _gameObjectService.ListGames(search);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<GameObject>> LoadGame(string id)
        {
            return await _gameObjectService.LoadGame(id);
        }

        [HttpPost]
        public async Task<ActionResult<bool>> StoreGame([FromBody] GameObject gameObject)
        {
            return await _gameObjectService.StoreGame(gameObject);
        }
    }
}
