using System; 
using System.ComponentModel.DataAnnotations;

namespace WriterApi.ViewModel
{
    public class WriterCreateModel
    {
        [Required]
        [StringLength(256)]
        public string FirstName { get; set; }

        [Required]
        [StringLength(256)]
        public string LastName { get; set; }

        [Required]
        public DateTime DateOfBirth { get; set; }

        [StringLength(int.MaxValue)]
        public string Biography { get; set; }
    }
}
