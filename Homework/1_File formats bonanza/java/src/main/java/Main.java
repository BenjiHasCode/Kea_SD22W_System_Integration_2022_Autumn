import model.Car;
import services.TextParser;
import services.XmlParser;

public class Main {
    public static void main(String[] args) {
        // Text
        System.out.println("Text Parsed");
        TextParser textParser = new TextParser();
        Car car = textParser.parse("src/main/resources/car.txt");
        System.out.println(car);

        // Xml
        System.out.println("XML Parsed");
        XmlParser xmlParser = new XmlParser();
        car = xmlParser.parse("src/main/resources/car.xml");
        System.out.println(car);
    }
}
