import fs from "fs";
import path from "path";

const fileRemover = (filename) => {
  fs.unlink(path.join(__dirname, "../uploads", filename), function (err) {
    if (err && err.code == "ENOENT") {
      // El archivo no existe
      console.log(`El archivo ${filename} no existe, no se eliminará.`);
    } else if (err) {
      console.log(err.message);
      console.log(`Ocurrió un error al intentar eliminar el archivo ${filename}`);
    } else {
      console.log(`El archivo ${filename} ha sido eliminado.`);
    }
  });
};

export { fileRemover };
