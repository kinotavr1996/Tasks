using System;  
using System.ComponentModel.DataAnnotations;

namespace WriterApp.Model
{
    public class Writer
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public DateTime DateOfBirth { get; set; }
        public string Biography { get; set; }

    }
}
