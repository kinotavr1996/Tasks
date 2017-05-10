using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WriterApp.Repository
{
    public interface IPagedList<T> : IReadOnlyList<T>
    {
        int TotalCount { get; }
        int Page { get; }
        int PageSize { get; }
    }
}
