﻿namespace back_app.Models
{
    public class UserLoginModel
    {
        public string Email { get; set; }
        public string Senha { get; set; }
        public Tipo TipoLogin { get; set; }

    }
}
