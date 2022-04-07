using Microsoft.EntityFrameworkCore;

namespace Atea_code_assignment_api.Repositories
{
    public class GameObjectRepository : DbContext
    {
        public GameObjectRepository(DbContextOptions options) : base(options) { }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
        }
    }
}
