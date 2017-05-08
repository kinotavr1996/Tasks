using System.ComponentModel.DataAnnotations;

namespace CustomerApp.Model
{
    public class Customer
    {
        public int Id { get; set; }

        [Required]
        [StringLength(256)]
        public string FirstName { get; set; }  

        [Required]
        [StringLength(256)]
        public string LastName { get; set; }

        [EmailAddress]
        [StringLength(256)]
        public string Email { get; set; }

        [StringLength(256)]
        public string PhoneNumber { get; set; }
    }
}
