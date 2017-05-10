using System;
using System.ComponentModel.DataAnnotations;

namespace WriterApp.Web.ViewModel
{
    public class BookEditModel
    {
        public int Id { get; set; }
        [Required]
        [StringLength(256)]
        public string Caption { get; set; }
        [Required]
        public DateTime PublishedDate { get; set; }
    }
}
