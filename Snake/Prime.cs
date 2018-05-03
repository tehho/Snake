using System.ComponentModel.DataAnnotations;

namespace Snake
{
    public class Prime
    {
        [Required]
        public float? x { get; set; }
        [Required]
        public float? y { get; set; }
        [Required]
        public int? id { get; set; }
        [Required]
        public bool? isPrime { get; set; }
    }
}
