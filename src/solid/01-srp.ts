(() => {
  // clases con una unica responsabilidad
  interface Product {
    id: number;
    name: string;
  }

  class ProductService {
    getProduct(id: number) {
      console.log("Producto: ", { id, name: "OLED Tv" });
    }

    saveProduct(product: Product) {
      // Realiza una petición para salvar en base de datos
      console.log("Guardando en base de datos", product);
    }
  }

  class Mailer {
    private emai: string = "anderson@anderson.com";

    sendEmail(smailList: string[], template: "to-clients" | "to-admin") {
      console.log("Enviando correo a los clientes", template);
    }
  }

  // END clases con una unica responsabilidad

  // Usualmente, esto es una clase para controlar la vista que es desplegada al usuario
  // Recuerden que podemos tener muchas vistas que realicen este mismo trabajo.
  class ProductBloc {
    private productService: ProductService;
    private mailer: Mailer;

    constructor(productService: ProductService, mailer: Mailer) {
      // esto tambien es inyeccion de dependencias
      this.productService = productService;
      this.mailer = mailer;
    }

    loadProduct(id: number) {
      // Realiza un proceso para obtener el producto y retornarlo
      //console.log("Producto: ", { id, name: "OLED Tv" });
      this.productService.getProduct(id);
    }

    saveProduct(product: Product) {
      // Realiza una petición para salvar en base de datos
      //console.log("Guardando en base de datos", product);
      this.productService.saveProduct(product);
    }

    notifyClients() {
      //console.log("Enviando correo a los clientes");
      this.mailer.sendEmail(["Eduardo@google.com"], "to-admin");
    }

    /*     onAddToCart(productId: number) {
        // Agregar al carrito de compras
        console.log("Agregando al carrito ", productId);
      } */
  }

  class CartBloc {
    private itemsInCart: Object[] = [];
    addToCart(productId: number) {
      // Agregar al carrito de compras
      console.log("Agregando al carrito ", productId);
    }
  }

  const mailer = new Mailer();
  const productService = new ProductService();

  //asi es mas facil hacer pruebas
  const productBloc = new ProductBloc(productService, mailer);
  const cartBloc = new CartBloc();

  productBloc.loadProduct(10);
  productBloc.saveProduct({ id: 10, name: "OLED TV" });
  productBloc.notifyClients();
  cartBloc.addToCart(10);
  // productBloc.onAddToCart(10);
})();
