import { ReactNode } from "react";
import { motion } from "framer-motion";

export const SectionBodyHeader = ({ title }: { title: string }) => {
  return <h3 className="flex font-body text-black text-base">{title}</h3>;
};

export const SectionBody = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex color-body font-body text-xs/relaxed items-center  text-left">
      {children}
    </div>
  );
};

export const Section = ({
  id,
  children,
}: {
  children: ReactNode;
  id: string;
}) => {
  return (
    <section id={id} className={`mb-3 -scroll-mt-[-5rem] snap-start`}>
      <motion.div
        id="id"
        initial={{
          opacity: 0,
          y: 100,
          scale: 0.75,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        transition={{
          duration: 0.5,
          ease: "easeOut",
        }}
        viewport={{ once: true }}
      >
        {children}
      </motion.div>
    </section>
  );
};
