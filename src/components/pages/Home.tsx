import { ImageMediaCardProps } from "components/pattern/molecules/cards/media/image/ImageMediaCard";
import FrontTemplate from "components/pattern/templates/FrontTemplate";
import { useEffect, useState } from "react";
import { getBannerImages } from "services/firebase/collections/banner";
import { getNewCourses } from "services/firebase/collections/newCourses";

// const images = [
//   "https://scontent.fkhi2-3.fna.fbcdn.net/v/t39.30808-6/313408811_487690020058428_3630285115529488846_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=730e14&_nc_ohc=EIbj2vOIMtMAX8xpGNp&_nc_ht=scontent.fkhi2-3.fna&oh=00_AfD04h3atQCkVxATjCS7YV0QRkUP6UGGaOTVxtDLEbS7RQ&oe=63B2065C",
//   "https://scontent.fkhi2-2.fna.fbcdn.net/v/t39.30808-6/313166779_487689756725121_4261122061430129973_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_ohc=JP5X3nOUt84AX9v3Mhm&_nc_ht=scontent.fkhi2-2.fna&oh=00_AfDz9K5sIifdIyPJQXJMze6Q1Kh-wqHVlsJg447s9Imtcw&oe=63B2179E",
//   "https://scontent.fkhi2-3.fna.fbcdn.net/v/t39.30808-6/312960822_487690380058392_5015314205635468907_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_ohc=c2y9a4m19WAAX89Yl91&_nc_ht=scontent.fkhi2-3.fna&oh=00_AfA4efuJuEN7wGJthsWi1EPZNMKwLktRy7tDfEVi8pnRew&oe=63B1B7E7",
// ];

const Home: React.FC = () => {
  const [images, setImages] = useState<string[]>([]);
  const [newCourses, setNewCourses] = useState<ImageMediaCardProps[]>([]);
  useEffect(() => {
    (async () => {
      setImages([...(await getBannerImages())]);

      const tempNewCourses: ImageMediaCardProps[] = [];
      await getNewCourses((doc) => {
        const { title, description, image_url } = doc.data();

        tempNewCourses.push({
          imageProps: { src: image_url },
          titleProps: { children: title },
          descriptionProps: { children: description },
        });
      });
      setNewCourses(tempNewCourses);
    })();
  }, []);

  return (
    <FrontTemplate
      banner={{ images }}
      courses={{
        title: "New Courses",
        items: newCourses,
      }}
      registration={{
        title: "Course Registration",
        onSubmit(a) {
          console.log(a);
        },
      }}
    />
  );
};

export default Home;
