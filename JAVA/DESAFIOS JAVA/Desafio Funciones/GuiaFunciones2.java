/* Escriba una función tal que recibe un número entero positivo. Si es par, debe devolver su
antecesor y en caso contrario, su sucesor. */
public class GuiaFunciones2 {
    static int antecesorSucesor (int num){
        int antecesor = 0;
        int sucesor = 0;
        if (num%2 == 0){
            antecesor = num-1;
            return antecesor;
        } else {
            sucesor = num+1;
            return sucesor;
        }
    }
}
