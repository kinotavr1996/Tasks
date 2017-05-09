using System; 

namespace WriterApp.ViewModel
{
    public class WriterGridModel
    {
        public int Id { get; set; } 
        public string FullName { get; set; }       
        public DateTime? DateOfBirth { get; set; } 
        public string Biography { get; set; }
    }
}
