type YearStatus = { [key: string]: boolean };

interface POLOLocation {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
  confirmed: boolean;
  years: YearStatus;
  description: string;
  image: string;
}

const mockPOGOLocations: POLOLocation[] = [
  {
    id: 1,
    name: "POGO Location A",
    latitude: 14.5995,
    longitude: 120.9842,
    confirmed: true,
    years: {
      "2017": true,
      "2018": false,
      "2019": true,
      "2020": true,
      "2021": false,
      "2022": true,
      "2023": true,
      "2024": false,
    },
    description:
      "POGO Location A is a vibrant hub known for its active community and scenic surroundings.",
    image: "https://placehold.co/600x400",
  },
  {
    id: 2,
    name: "POGO Location B",
    latitude: 14.6095,
    longitude: 120.9942,
    confirmed: false,
    years: {
      "2017": false,
      "2018": true,
      "2019": true,
      "2020": false,
      "2021": true,
      "2022": true,
      "2023": false,
      "2024": false,
    },
    description:
      "POGO Location B offers a tranquil environment, perfect for visitors seeking a peaceful getaway.",
    image: "https://placehold.co/600x400",
  },
  {
    id: 3,
    name: "POGO Location C",
    latitude: 14.6195,
    longitude: 121.0042,
    confirmed: true,
    years: {
      "2017": false,
      "2018": false,
      "2019": true,
      "2020": true,
      "2021": true,
      "2022": true,
      "2023": true,
      "2024": true,
    },
    description:
      "POGO Location C is a bustling area known for its rich history and modern amenities.",
    image: "https://placehold.co/600x400",
  },
];

export default mockPOGOLocations;
