using Atea_code_assignment_api.Entities;
using Atea_code_assignment_api.Interfaces;
using Atea_code_assignment_api.Repositories;
using System.Collections.Generic;

namespace Atea_code_assignment_api.Services
{
    public class GameObjectService : IGameObjectService
    {
        private readonly GameObjectRepository _gameObjectRepository;

        public GameObjectService(GameObjectRepository gameObjectRepository)
        {
            _gameObjectRepository = gameObjectRepository;
        }

        public List<GameObject> ListGames()
        {
            throw new System.NotImplementedException();
        }

        public GameObject LoadGame(string id)
        {
            throw new System.NotImplementedException();
        }

        public bool StoreGame(GameObject gameObject)
        {
            throw new System.NotImplementedException();
        }
    }
}
