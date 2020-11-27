import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class SimplePasswordGenerator {
    private static class Alphabet {
        private static final char[] letters = new char[] {'а','б','в','г','д','е','ё','ж','з','и','й','к','л','м','н','о','п','р','с','т','у','ф','х','ц','ч','ш','щ','ъ','ы','ь','э','ю','я'};
        private static char getRandomLetter() {
            int randomNumber = (int) (Math.random() * 33);
            return letters[randomNumber];
        }
    }
    public static void main(String[] args) throws IOException {
        BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));
        System.out.println("Введите индентификатор:");

        String identificator = reader.readLine();
        int q = identificator.length() % 6;
        StringBuilder result = new StringBuilder();
        for(int i = 0; i < 2; i++) {
            result.append(Character.toUpperCase(Alphabet.getRandomLetter()));
        }

        for (int i =3; i < 10-q-1; i++) {
            result.append(Alphabet.getRandomLetter());
        }
        System.out.println(String.format("Результат: %s", result.toString()));
    }
}
