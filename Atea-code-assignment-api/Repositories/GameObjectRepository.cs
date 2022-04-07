using Atea_code_assignment_api.Entities;
using Microsoft.EntityFrameworkCore;

namespace Atea_code_assignment_api.Repositories
{
    public class GameObjectRepository : DbContext
    {
        public DbSet<GameObject> GameObjects { get; set; }

        public GameObjectRepository(DbContextOptions options) : base(options) { }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<GameObject>()
                .HasIndex(g => g.Name)
                .IsUnique();

            modelBuilder.Entity<GameObject>()
                .Property(g => g.Price)
                .HasColumnType("money")
                .HasPrecision(2);
        }
    }
}
