using Atea_code_assignment_api.Entities;
using System.Collections.Generic;

namespace Atea_code_assignment_api.Interfaces
{
    public interface IGameObjectService
    {
        public List<GameObject> ListGames();
        public GameObject LoadGame(string id);
        public bool StoreGame(GameObject gameObject);
    }
}
