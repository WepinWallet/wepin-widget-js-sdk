import Utils from "../../utils/utils";
var floatImage = /** @class */ (function () {
    function floatImage() {
    }
    // private readonly imageId: string;
    // private constructor() {
    //     this.imageId = `id-${Utils.uuidv4()}`;  
    // }
    floatImage.floatNew = function (wepin) {
        var imageElement = document.createElement('img');
        imageElement.id = "id-".concat(Utils.uuidv4());
        imageElement.className = floatImage.CONST.imageClassName;
        imageElement.src = '../../assets/wepin-froat.png';
        imageElement.alt = 'no image';
        imageElement.style.position = 'fixed';
        imageElement.style.bottom = '8px';
        imageElement.style.right = '16px';
        imageElement.addEventListener('click', function () {
            wepin.openWindow();
        });
        document.body.appendChild(imageElement);
        return imageElement;
    };
    floatImage.CONST = {
        imageClassName: 'wepin-sdk-float-image',
    };
    return floatImage;
}());
export { floatImage };
//# sourceMappingURL=floatImage.js.map