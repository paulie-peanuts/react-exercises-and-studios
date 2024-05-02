export default function BookList() {
   let pageTitle = "The Coolest Books Around";
   let book1 = "https://www.shambhala.com/media/catalog/product/cache/a97331a5130f36fd8e47c3963d3aaa32/9/7/9781590304488_1.png";
   let book2 = "https://pictures.abebooks.com/inventory/15698731412.jpg";
   let book3 = "https://m.media-amazon.com/images/I/61JE7tWDvqL._AC_UF1000,1000_QL80_.jpg";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} alt="The Art of Peace" />
         <img src={book2} alt="Inherent Vice" width="160px"/>
         <img src={book3} alt="No Bad Parts" width="200px"/>
      </div>      
   );
}