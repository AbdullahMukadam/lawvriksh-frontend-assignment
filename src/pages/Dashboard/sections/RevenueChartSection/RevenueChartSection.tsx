
import { AnimatedCard } from "../../../../components/ui/animated-card";
import { CardContent } from "../../../../components/ui/card";

const productsData = [
  {
    name: "iPhone 14 Pro Max",
    stock: "524 in stock",
    price: "$ 1,099.00",
  },
  {
    name: "Apple Watch S8",
    stock: "320 in stock",
    price: "$ 799.00",
  },
];

export default function RevenueChartSection(){
  return (
    <section className="w-full h-[350px]">
      <AnimatedCard 
        className="bg-secondary-colorscolor-1 rounded-xl shadow-general-shadow-01 border-0 "
        delay={200}
      >
        <CardContent className="p-0">
          <div className="pt-[34px] px-[29px] pb-[34px]">
            <h2 className="font-text-single-300-medium font-[number:var(--text-single-300-medium-font-weight)] text-neutral-colors100 text-[length:var(--text-single-300-medium-font-size)] tracking-[var(--text-single-300-medium-letter-spacing)] leading-[var(--text-single-300-medium-line-height)] [font-style:var(--text-single-300-medium-font-style)] mb-12">
              Products
            </h2>

            <div className="flex justify-between items-center mb-12">
              <span className="font-paragraph-small text-neutral-colors100 leading-[var(--paragraph-small-line-height)] font-[number:var(--paragraph-small-font-weight)] tracking-[var(--paragraph-small-letter-spacing)] text-[14px] [font-style:var(--paragraph-small-font-style)]">
                Products
              </span>
              <span className="[font-family:'Work_Sans',Helvetica] text-neutral-colors100 text-[14px] leading-[14px] font-medium tracking-[0]">
                Price
              </span>
            </div>

            <div className="space-y-[34px]">
              {productsData.map((product, index) => (
                <div 
                  key={index} 
                  className="flex justify-between items-start p-3 -mx-3 rounded-lg transition-all duration-200 hover:bg-neutral-colors700/20 cursor-pointer group/product"
                  style={{ animationDelay: `${index * 100 + 200}ms` }}
                >
                  <div className="flex flex-col">
                    <div className="font-text-single-100-bold font-[number:var(--text-single-100-bold-font-weight)] text-neutral-colors100 text-[length:var(--text-single-100-bold-font-size)] tracking-[var(--text-single-100-bold-letter-spacing)] leading-[var(--text-single-100-bold-line-height)] [font-style:var(--text-single-100-bold-font-style)] whitespace-nowrap transition-colors duration-150 group-hover/product:text-primary-colorscolor-1">
                      {product.name}
                    </div>
                    <div className="font-paragraph-small font-[number:var(--paragraph-small-font-weight)] text-neutral-colors400 text-[length:var(--paragraph-small-font-size)] tracking-[var(--paragraph-small-letter-spacing)] leading-[var(--paragraph-small-line-height)] [font-style:var(--paragraph-small-font-style)] whitespace-nowrap mt-1 transition-colors duration-150 group-hover/product:text-neutral-colors300">
                      {product.stock}
                    </div>
                  </div>
                  <div className="[font-family:'Work_Sans',Helvetica] text-neutral-colors100 text-[10px] leading-[14px] font-medium tracking-[0] whitespace-nowrap transition-transform duration-150 group-hover/product:scale-110">
                    {product.price}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </AnimatedCard>
    </section>
  );
};
