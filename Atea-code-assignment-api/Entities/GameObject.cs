using System;
using System.ComponentModel.DataAnnotations;

namespace Atea_code_assignment_api.Entities
{
    public class GameObject
    {
        [Key]
        public string Id { get; set; }
        public string Name { get; set; }
        public string Company { get; set; }
        public decimal Price { get; set; }

        public GameObject()
        {
            Id = Guid.NewGuid().ToString();
            Price = 0;
        }
    }
}
