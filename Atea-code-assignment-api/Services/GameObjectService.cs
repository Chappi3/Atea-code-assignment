using Atea_code_assignment_api.Entities;
using Atea_code_assignment_api.Exceptions;
using Atea_code_assignment_api.Interfaces;
using Atea_code_assignment_api.Repositories;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Atea_code_assignment_api.Services
{
    public class GameObjectService : IGameObjectService
    {
        private readonly GameObjectRepository _gameObjectRepository;

        public GameObjectService(GameObjectRepository gameObjectRepository)
        {
            _gameObjectRepository = gameObjectRepository;
        }

        public async Task<List<GameObject>> ListGames(string search)
        {
            if (search != null)
            {
                return await _gameObjectRepository.GameObjects
                    .Where(g => g.Name.ToLower().Contains(search.ToLower()) || g.Company.ToLower().Contains(search.ToLower()))
                    .ToListAsync();
            }

            return await _gameObjectRepository.GameObjects.ToListAsync();
        }

        public async Task<GameObject> LoadGame(string id)
        {
            return await _gameObjectRepository.GameObjects.FirstOrDefaultAsync(g => g.Id == id);
        }

        public async Task<bool> StoreGame(GameObject gameObject)
        {
            await _gameObjectRepository.GameObjects.AddAsync(gameObject);
            try
            {
                await _gameObjectRepository.SaveChangesAsync();
            }
            catch (DbUpdateException e)
            {
                throw new StoreGameException(e.Message);
            }
            return true;
        }
    }
}
