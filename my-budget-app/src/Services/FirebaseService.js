import { db } from '../firebase';
import { collection, addDoc, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';

const transactionsCollection = collection(db, 'transactions');
const savingsCollection = collection(db, 'savings');

// Add a transaction
const addTransaction = async (transaction) => {
    await addDoc(transactionsCollection, transaction);
};

// Get all transactions
const getTransactions = async () => {
    const snapshot = await getDocs(transactionsCollection);
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

// Delete a transaction
const deleteTransaction = async (id) => {
    const transactionDoc = doc(db, 'transactions', id);
    await deleteDoc(transactionDoc);
};

// Add a savings goal
const addSavings = async (savings) => {
    await addDoc(savingsCollection, savings);
};

// Get all savings goals
const getSavings = async () => {
    const snapshot = await getDocs(savingsCollection);
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

// User login
const loginUser = async (email, password) => {
    const auth = getAuth();
    await signInWithEmailAndPassword(auth, email, password);
};

// User registration
const registerUser = async (email, password) => {
    const auth = getAuth();
    await createUserWithEmailAndPassword(auth, email, password);
};

export {
    addTransaction,
    getTransactions,
    deleteTransaction,
    addSavings,
    getSavings,
    loginUser,
    registerUser // Ensure this is exported correctly
};
