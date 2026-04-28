namespace ConstruSoftTicket.Application.Interfaces
{
    public interface IAuthService
    {
        bool Login(string email, string password);
    }
}