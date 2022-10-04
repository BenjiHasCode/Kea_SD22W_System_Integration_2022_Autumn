package model;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.xml.bind.annotation.*;
import java.util.List;

@Data
@NoArgsConstructor
@XmlRootElement()
@XmlAccessorType(XmlAccessType.FIELD)
public class Car {
    private String brand;
    private String model;
    private int odometer;
    private boolean fast;
    @XmlElementWrapper(name="traits")
    @XmlElement(name="trait")
    private List<String> traits;
}
