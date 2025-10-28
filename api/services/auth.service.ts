import {
  getAuth,
  User,
  UserCredential,
  Auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  updateProfile,
  reauthenticateWithCredential,
  EmailAuthProvider,
  updatePassword,
  deleteUser,
  fetchSignInMethodsForEmail,
} from "firebase/auth"

export class AuthService {
  private firebaseAuth: Auth

  constructor() {
    this.firebaseAuth = getAuth()
  }

  get currentUser(): User | null {
    return this.firebaseAuth.currentUser
  }

  get authStateChanges() {
    return this.firebaseAuth.onAuthStateChanged
  }

  async signIn(email: string, password: string): Promise<UserCredential> {
    return signInWithEmailAndPassword(this.firebaseAuth, email, password)
  }

  async fetchSignInMethods(email: string): Promise<string[]> {
    return fetchSignInMethodsForEmail(this.firebaseAuth, email)
  }
  async createAccount(
    email: string,
    password: string
  ): Promise<UserCredential> {
    return createUserWithEmailAndPassword(this.firebaseAuth, email, password)
  }

  async signOut(): Promise<void> {
    return signOut(this.firebaseAuth)
  }

  async resetPassword(email: string): Promise<void> {
    return sendPasswordResetEmail(this.firebaseAuth, email)
  }

  async updateUsername(username: string): Promise<void> {
    if (this.currentUser) {
      return updateProfile(this.currentUser, { displayName: username })
    }
    throw new Error("No user is currently signed in.")
  }

  async deleteAccount(email: string, password: string): Promise<void> {
    if (!this.currentUser) throw new Error("No user is currently signed in.")
    const credential = EmailAuthProvider.credential(email, password)
    await reauthenticateWithCredential(this.currentUser, credential)
    await deleteUser(this.currentUser)
    await signOut(this.firebaseAuth)
  }

  async resetPasswordFromCurrentPassword(
    currentPassword: string,
    newPassword: string,
    email: string
  ): Promise<void> {
    if (!this.currentUser) throw new Error("No user is currently signed in.")
    const credential = EmailAuthProvider.credential(email, currentPassword)
    await reauthenticateWithCredential(this.currentUser, credential)
    await updatePassword(this.currentUser, newPassword)
  }

  async getFirebaseIdToken(): Promise<string | null> {
    if (this.currentUser) {
      return this.currentUser.getIdToken()
    }
    return null
  }
}
