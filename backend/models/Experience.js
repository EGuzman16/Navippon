import mongoose from 'mongoose';
const { Schema, model } = mongoose;

// Esquema de Experiencia
const ExperienceSchema = new Schema({
    categories: [{ type: Schema.Types.ObjectId, ref: "ExperienceCategories" }],
    image: { type: String, required: true },
    title: { type: String, required: true },
    author: { type: Schema.Types.ObjectId, ref: "User", required: true },
    rating: { type: Number, min: 1, max: 5, required: true },
    region: { type: String, required: true, enum: ["Hokkaido", "Tohoku", "Kanto", "Chubu", "Kinki (Kansai)", "Chugoku", "Shikoku", "Kyushu"] },
    prefecture: { type: String, required: true, enum: ["Hokkaido", "Aomori", "Iwate", "Miyagi", "Akita", "Yamagata", "Fukushima", "Ibaraki", "Tochigi", "Gunma", "Saitama", "Chiba", "Tokyo", "Kanagawa", "Niigata", "Toyama", "Ishikawa", "Fukui", "Yamanashi", "Nagano", "Gifu", "Shizuoka", "Aichi", "Mie", "Shiga", "Kyoto", "Osaka", "Hyogo", "Nara", "Wakayama", "Tottori", "Shimane", "Okayama", "Hiroshima", "Yamaguchi", "Tokushima", "Kagawa", "Ehime", "Kochi", "Fukuoka", "Saga", "Nagasaki", "Kumamoto", "Oita", "Miyazaki", "Kagoshima", "Okinawa"] },
    address: { type: String, required: true },
    mapEmbedUrl: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    website: { type: String, required: true },
    schedules: { type: String, required: true },
    days: { type: String, required: true },
    season: { type: String, enum: ["Primavera", "Otoño", "Invierno", "Verano", "Todo el Año"], required: true },
    price: { type: Number, required: true },
    budget: { type: String, enum: ["Gratis", "Económico", "Moderado", "Lujo"], required: true },
    description: { type: String, required: true },
    restaurantType: { type: String, enum: ["Tradicional", "Comida rápida", "Cafeterías", "Alta cocina", "Food Truck", "Ramen", "Sushi"], required: false },
    cuisineType: { type: String, enum: ["Tradicional", "Internacional", "Fusión", "Vegana", "Vegetariana", "Sin gluten", "Halal", "Kosher", "Rápida", "De autor", "Con espectáculo", "Familiar", "Romántica", "Ocasiones especiales"], required: false },
    location: { type: Schema.Types.ObjectId, ref: "Location", required: false },
    tags: [{ type: Schema.Types.ObjectId, ref: "Tags", required: false }],
    accommodationType: { type: Schema.Types.ObjectId, ref: "AccommodationType", required: false },
    hotelServices: [{ type: Schema.Types.ObjectId, ref: "HotelService", required: false }],
    restaurantServices: [{ type: Schema.Types.ObjectId, ref: "RestaurantService", required: false }],
    triptype: { type: Schema.Types.ObjectId, ref: "TripType", required: false },
}, { timestamps: true });

ExperienceSchema.virtual("comments", {
    ref: "Comment",
    localField: "_id",
    foreignField: "experience",
});

const Post = model("Post", PostSchema);
export default Post;

// Esquemas relacionados
const LocationSchema = new Schema({
    title: { type: String, required: true },
    icon: { type: String, required: true },
});

const TagsSchema = new Schema({
    title: { type: String, required: true },
    icon: { type: String, required: true },
});

const AccommodationTypeSchema = new Schema({
    title: { type: String, required: true },
    icon: { type: String, required: true },
});

const HotelServiceSchema = new Schema({
    title: { type: String, required: true },
    icon: { type: String, required: true },
});

const RestaurantServiceSchema = new Schema({
    title: { type: String, required: true },
    icon: { type: String, required: true },
});

const TripTypeSchema = new Schema({
    title: { type: String, required: true },
    icon: { type: String, required: true },
});

// Exportar modelos
const Experience = model("Experience", ExperienceSchema);
const Location = model("Location", LocationSchema);
const Tags = model("Tags", TagsSchema);
const AccommodationType = model("AccommodationType", AccommodationTypeSchema);
const HotelService = model("HotelService", HotelServiceSchema);
const RestaurantService = model("RestaurantService", RestaurantServiceSchema);
const TripType = model("TripType", TripTypeSchema);

export {
    Experience,
    Location,
    Tags,
    AccommodationType,
    HotelService,
    RestaurantService,
    TripType
};