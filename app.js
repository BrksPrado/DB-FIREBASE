// Importação do Firebase
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs, doc, updateDoc, deleteDoc, query, orderBy } from "firebase/firestore";

// Configuração do meu BD do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBlqxOD3Fhi3v9-hrHeMaRKiuSnCcNV16Q",
  authDomain: "db-cloud-unifio.firebaseapp.com",
  projectId: "db-cloud-unifio",
  storageBucket: "db-cloud-unifio.firebasestorage.app",
  messagingSenderId: "221515938294",
  appId: "1:221515938294:web:ffb3d3225119dd07552fd7",
  measurementId: "G-1BTY60MW4Z"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// CREATE
async function adicionarProduto() {
  const docRef = await addDoc(collection(db, "produtos"), {
    nome: "Geladeira Brastemp Frost Free",
    categoria: "Eletrodomésticos",
    preco: 2599,
    disponivel: true
  });
  console.log("Produto adicionado: ", docRef.id);
  return docRef.id;
}

// READ
async function listarProdutos() {
  const produtosRef = collection(db, "produtos");
  const q = query(produtosRef, orderBy("nome"));
  const querySnapshot = await getDocs(q);

  if (querySnapshot.empty) {
    console.log("Nenhum documento encontrado na coleção: produtos");
    return;
  }

  querySnapshot.forEach((docSnap) => {
    console.log("-----------------------------------------------------------");
    const data = docSnap.data();
    console.log(`ID: ${docSnap.id}`);
    console.log(`Nome: ${data.nome}`);
    console.log(`Categoria: ${data.categoria}`);
    console.log(`Preço: ${data.preco}`);
    console.log(`Disponível: ${data.disponivel}`);
  });
}


// UPDATE
async function atualizarProduto(id) {
  const produtoRef = doc(db, "produtos", id);
  await updateDoc(produtoRef, { 
    preco: 4786, 
    categoria: "Informática", 
    nome: "Placa de Vídeo RTX 4090 Ti", 
    disponivel: false  
  });
  console.log("Produto atualizado: ", id);
}

// DELETE
async function excluirProduto(id) {
  await deleteDoc(doc(db, "produtos", id));
  console.log("Produto excluído: ", id);
}

// Fluxo principal
(async () => {
  console.log("-----------------------------------------------------------");
  console.log("===================== CRIANDO PRODUTO =====================");
  console.log("-----------------------------------------------------------");
  const idDoProduto = await adicionarProduto();   // inserir e guardar o ID
  await listarProdutos();                         // listar produtos existentes + adicionados
  console.log("-----------------------------------------------------------");
  console.log("=================== ATUALIZANDO PRODUTO ===================");
  console.log("-----------------------------------------------------------");
  await atualizarProduto(idDoProduto);            // atualizar usando o ID retornado
  await listarProdutos();                         // listar produtos existente + atualizados
  console.log("-----------------------------------------------------------");
  console.log("=================== EXCLUINDO PRODUTO ===================");
  console.log("-----------------------------------------------------------");
  await excluirProduto(idDoProduto);             // excluir usando o mesmo ID
  await listarProdutos();                        // listar todos os produtos
  process.exit(0);
})();