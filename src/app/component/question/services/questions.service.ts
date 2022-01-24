import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  items:any[] = [
    {
      id: 0,
      q: "Who is Nuwe marketing & sponsorships manager?",
      text1: "Imma Calvo", 
      text2: "Anemari Fiser",
      text3: "Paola Veltri", 
      text4: "Sian Davies", 
      image:'assets/q1.png',
      // a: [{ text1: "Imma Calvo", isCorrect: false },
      //     { text2: "Anemari Fiser", isCorrect: false },
      //     { text3: "Paola Veltri", isCorrect: true },
      //     { text4: "Sian Davies", isCorrect: false }
      // ]
  },
  // {
  //     id: 1,
  //     q: "Who is Anemari Fiser?",
  //     a: [{ text1: "Global Data Scientist Nespresso", isCorrect: false, isSelected: false },
  //         { text2: "CEO and founder Tipcscool", isCorrect: false },
  //         { text3: "Vice-President Procore", isCorrect: false },
  //         { text4: "Product Director Codeop", isCorrect: true }
  //     ]
  // },
//   {
//       id: 2,
//       q: "Is considered to be the mother of computer programming?",
//       a: [{ text1: "Edith Clarke", isCorrect: false },
//           { text2: "Frida Kahlo", isCorrect: false },
//           { text3: "Ada Lovelace", isCorrect: true },
//           { text4: "Grace Murray Hopper", isCorrect: false }
//       ]
//   },
//   {
//       id: 3,
//       q: "Famous Hollywood actress and inventor. I create a wireless system for missiles that inspired wifi?",
//       a: [{ text1: "Carol Shaw", isCorrect: false },
//           { text2: "Evelin Berecin", isCorrect: false },
//           { text3: "Grace Murray", isCorrect: false },
//           { text4: "Hedy Lamarr", isCorrect: true }
//       ]
//   },
// {
//     id: 5,
//     q: "Is it a support network for women who identify as Latina in technology?",
//     a: [{ text: "@femhack", isCorrect: false },
//         { text: "@redcomunidades", isCorrect: false },
//         { text: "@Technolatinas", isCorrect: true },
//         { text: "@hack_women", isCorrect: false }
//     ]
// }
  ]
  

}
