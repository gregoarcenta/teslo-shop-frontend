import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Heart,
  ShoppingBag,
  Truck,
  Shield,
  RefreshCw,
  ChevronLeft
} from "lucide-react";
import { toast } from "sonner";
import jacketBlack from "@/assets/tesla-jacket-black.jpg";
import hoodieGray from "@/assets/tesla-hoodie-gray.jpg";
import sweatshirtNavy from "@/assets/tesla-sweatshirt-navy.jpg";
import { Link, useParams } from "react-router";

// Mock product - will be replaced with real data
const mockProduct = {
  id: "2",
  name: "Chaqueta Tesla Premium",
  description:
    "Chaqueta de alta calidad con logo Tesla. Diseñada para ofrecer estilo y funcionalidad. Fabricada con materiales premium que garantizan durabilidad y comodidad. Perfecta para cualquier ocasión.",
  price: 150.0,
  type: "men",
  gender: "masculine",
  sizes: ["S", "M", "L", "XL"],
  tags: ["abrigo", "premium", "tesla"],
  stock: 8,
  images: [jacketBlack, hoodieGray, sweatshirtNavy]
};

export const ProductPage = () => {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simular carga del producto
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [id]);

  const handleAddToCart = () => {
    if (!selectedSize) {
      toast.error("Por favor selecciona una talla");
      return;
    }
    toast.success("Producto agregado al carrito");
  };

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <Skeleton className="h-8 w-40 mb-6" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Images Skeleton */}
          <div className="space-y-4">
            <Skeleton className="aspect-square w-full rounded-2xl" />
            <div className="grid grid-cols-3 gap-4">
              {[1, 2, 3].map((i) => (
                <Skeleton key={i} className="aspect-square rounded-lg" />
              ))}
            </div>
          </div>

          {/* Product Info Skeleton */}
          <div className="space-y-6">
            <div>
              <Skeleton className="h-10 w-3/4 mb-4" />
              <div className="flex gap-2 mb-4">
                <Skeleton className="h-6 w-20" />
                <Skeleton className="h-6 w-20" />
              </div>
              <Skeleton className="h-8 w-32" />
            </div>

            <div className="space-y-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
            </div>

            <div className="space-y-3">
              <Skeleton className="h-5 w-40" />
              <div className="flex gap-2">
                {[1, 2, 3, 4].map((i) => (
                  <Skeleton key={i} className="h-10 w-16" />
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <Skeleton className="h-5 w-32" />
              <div className="flex items-center gap-3">
                <Skeleton className="h-10 w-10" />
                <Skeleton className="h-8 w-12" />
                <Skeleton className="h-10 w-10" />
                <Skeleton className="h-6 w-32" />
              </div>
            </div>

            <div className="flex gap-3">
              <Skeleton className="h-12 flex-1" />
              <Skeleton className="h-12 w-12" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Back Button */}
      <Link
        to="/products"
        className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-6 transition-colors"
      >
        <ChevronLeft className="h-4 w-4 mr-1" />
        Volver a productos
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Images */}
        <div className="space-y-4">
          {/* Main Image */}
          <div className="aspect-square rounded-2xl overflow-hidden bg-secondary/30 shadow-medium">
            <img
              src={mockProduct.images[selectedImage]}
              alt={mockProduct.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Thumbnail Images */}
          <div className="grid grid-cols-3 gap-4">
            {mockProduct.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                  selectedImage === index
                    ? "border-primary shadow-glow"
                    : "border-transparent hover:border-primary/50"
                }`}
              >
                <img
                  src={image}
                  alt={`${mockProduct.name} ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          {/* Title & Price */}
          <div>
            <h1 className="text-4xl font-bold mb-2">{mockProduct.name}</h1>
            <div className="flex items-center gap-2 mb-4">
              <Badge variant="outline" className="border-primary text-primary">
                {mockProduct.type === "men"
                  ? "Hombre"
                  : mockProduct.type === "women"
                  ? "Mujer"
                  : mockProduct.type === "kids"
                  ? "Niños"
                  : "Unisex"}
              </Badge>
              {mockProduct.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
            <p className="text-3xl font-bold bg-linear-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              ${mockProduct.price.toFixed(2)}
            </p>
          </div>

          {/* Description */}
          <p className="text-muted-foreground leading-relaxed">
            {mockProduct.description}
          </p>

          {/* Size Selection */}
          <div className="space-y-3">
            <label className="text-sm font-semibold">
              Selecciona tu talla:
            </label>
            <div className="flex flex-wrap gap-2">
              {mockProduct.sizes.map((size) => (
                <Button
                  key={size}
                  variant={selectedSize === size ? "default" : "outline"}
                  className={selectedSize === size ? "gradient-hero" : ""}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </Button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="space-y-3">
            <label className="text-sm font-semibold">Cantidad:</label>
            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                size="icon"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
              >
                -
              </Button>
              <span className="text-lg font-semibold w-12 text-center">
                {quantity}
              </span>
              <Button
                variant="outline"
                size="icon"
                onClick={() =>
                  setQuantity(Math.min(mockProduct.stock, quantity + 1))
                }
              >
                +
              </Button>
              <span className="text-sm text-muted-foreground ml-2">
                ({mockProduct.stock} disponibles)
              </span>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3">
            <Button
              size="lg"
              className="flex-1 gradient-hero shadow-glow"
              onClick={handleAddToCart}
            >
              <ShoppingBag className="mr-2 h-5 w-5" />
              Agregar al Carrito
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => setIsFavorite(!isFavorite)}
            >
              <Heart
                className={`h-5 w-5 ${
                  isFavorite ? "fill-destructive text-destructive" : ""
                }`}
              />
            </Button>
          </div>

          {/* Features */}
          <div className="space-y-4 pt-6 border-t border-border">
            <div className="flex items-center gap-3 text-sm">
              <Truck className="h-5 w-5 text-primary" />
              <span>Envío gratis en pedidos superiores a $50</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <RefreshCw className="h-5 w-5 text-primary" />
              <span>Devoluciones fáciles en 30 días</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <Shield className="h-5 w-5 text-primary" />
              <span>Garantía de calidad y autenticidad</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
