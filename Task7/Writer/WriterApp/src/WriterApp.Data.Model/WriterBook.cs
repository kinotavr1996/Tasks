namespace WriterApp.Data.Model
{
    public class WriterBook
    {
        public int BookId { get; set; }
        public Book Book { get; set; }
        public int WriterId { get; set; }
        public Writer Writer { get; set; }
    }
}
