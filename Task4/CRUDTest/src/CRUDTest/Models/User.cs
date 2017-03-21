using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace CRUDTest
{
    public enum Gendre
    {
        Male,
        Female
    }
    public class User
    {
        public int ID { get; set; }
        [StringLength(60, MinimumLength = 3)]
        [Required]
        public string LastName { get; set; }
        [StringLength(60, MinimumLength = 3)]
        [Required]
        public string FirstMidName { get; set; }
        [StringLength(60, MinimumLength = 11)]
        [Required]
        public string Phone { get; set; }
        public Gendre UserGendre { get; set; }
        public string Country { get; set; }        
    }
}
