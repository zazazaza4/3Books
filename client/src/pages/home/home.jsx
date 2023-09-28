import books from '~/assets/data.json';
import { Input } from '~/libs/components/input/input.jsx';
import { IconName } from '~/libs/enums/enums.js';
import { useAppForm } from '~/libs/hooks/hooks.js';

import { CarouselSection } from './components/carousel-section/carousel-section.jsx';
import styles from './styles.module.scss';

const Home = () => {
  const { control } = useAppForm({
    defaultValues: {
      search: ''
    }
  });

  return (
    <div className={styles.home}>
      <div className={styles.pageHeader}>
        <section>
          <div className={styles.title}>A home for your books.</div>
          <div className={styles.subtitle}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate,
            dolorem!
          </div>
          <div className={styles.search}>
            <Input
              className={styles.search}
              iconName={IconName.QUESTION}
              placeholder="Search books..."
              name="search"
              value=""
              control={control}
            />
          </div>
        </section>
        <section className={styles.quotation}>quotation</section>
      </div>
      <div className="container">
        <CarouselSection title="For Children" books={books} />
        <CarouselSection title="Romans" books={books} />
        <CarouselSection title="Fantastic" books={books} />
        <CarouselSection title="Any" books={books} />
      </div>
    </div>
  );
};

export { Home };
