using System;

namespace WriterApp.Data.Model
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
