package springpart.backend.exception;

public class PasswordIncorrectException extends Exception {
    public PasswordIncorrectException(String message) {
        super(message);
    }
}
