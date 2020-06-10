using System.ComponentModel.DataAnnotations;

namespace ProAgil.WebAPI.Model
{
    public class Evento
    {
        [Key]
        public int Id {get;set;}
        public string Local { get; set; }
        public string DateEvent { get; set; }
        public string  Tema{get;set;}
        public int QuantityPeoples { get; set; }
        public string Lote{get;set;}

        public string image{get;set;}
    }
}