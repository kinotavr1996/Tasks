namespace WriterApp.Data.Model
{
    public class WriterReport
    {
        public int Id { get; set; }
        public string FullName { get; set; }
        public int NumberOfBooks { get; set; }
        public int? FirstBook { get; set; }
        public int? LastBook { get; set; } 
    }
}
