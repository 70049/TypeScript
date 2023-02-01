// ************ The never type is assignable to every type, however no type is assignable
//           to never (expect never itself).  This means you can use narrowing and rely on never
//          turning up to do exhaustive checking in a  switch statement             ***************
// function getTrueShape(Shape: shape): {
//   if (Shape.kind === "circle") {
//     return Math.PI * shape.radius ** 2;
//   }
//   return shape.side * shape.side;
// }
