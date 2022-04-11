using System.Text.Json.Serialization;

namespace Atea_code_assignment_client.Models
{
    public class GameObject
    {
        [JsonPropertyName("id")]
        public string Id { get; set; }
        [JsonPropertyName("name")]
        public string Name { get; set; }
        [JsonPropertyName("company")]
        public string Company { get; set; }
        [JsonPropertyName("price")]
        public decimal Price { get; set; }
    }
}
