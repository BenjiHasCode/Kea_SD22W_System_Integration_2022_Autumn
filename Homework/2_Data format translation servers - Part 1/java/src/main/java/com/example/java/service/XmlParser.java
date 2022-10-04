package services;

import model.Car;

import javax.xml.bind.JAXBContext;
import javax.xml.bind.JAXBException;
import javax.xml.bind.Unmarshaller;
import java.io.File;

public class XmlParser {
    public Car parse(String filename) {
        try {
            JAXBContext jaxbContext = JAXBContext.newInstance(Car.class);
            Unmarshaller jaxbUnmarshaller = jaxbContext.createUnmarshaller();

            return (Car) jaxbUnmarshaller.unmarshal(new File(filename));
        } catch (JAXBException e) {
            e.printStackTrace();
            return null;
        }
    }
}
