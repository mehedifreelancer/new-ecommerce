import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <section className="gi-service-section py-[40px] max-[767px]:py-[30px]">
      <div className="flex flex-wrap justify-between items-center mx-auto min-[1600px]:max-w-[1600px] min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
        <div className="w-full flex flex-wrap mt-[-12px] mb-[-12px]">
          {[0, 1, 2, 3].map((item) => (
            <ServiceCard key={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
