using Microsoft.Data.SqlClient;
using System.Data;

namespace DbAdapter
{
    public class DbAdapterContext
    {
        private readonly string connectionString;
        public DbAdapterContext(string conn)
        {
            connectionString = conn;
        }

        public IDbConnection Connection => new SqlConnection(connectionString);
    }
}
