using Atea_code_assignment_api.Entities;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Atea_code_assignment_api.Interfaces
{
    public interface IGameObjectService
    {
        public Task<List<GameObject>> ListGames(string search);
        public Task<GameObject> LoadGame(string id);
        public Task<bool> StoreGame(GameObject gameObject);
    }
}
