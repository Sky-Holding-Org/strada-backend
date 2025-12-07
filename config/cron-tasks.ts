export default{
  /**
   * Cron job to clean up expired offers.
   * Runs every day at 1:00 AM.
   */
  cleanupExpiredOffers: {
    task: async ({ strapi }) => {
      const offers = await strapi.entityService.findMany('api::offer.offer', {
        populate: ['blocks'],
      });

      const currentDate = new Date();
      let updatedCount = 0;

      for (const offer of offers) {
        if (offer.blocks) {
          const originalLength = offer.blocks.length;
          offer.blocks = offer.blocks.filter(block => {
            return !block.endDate || new Date(block.endDate) > currentDate;
          });

          if (offer.blocks.length !== originalLength) {
            await strapi.entityService.update('api::offer.offer', offer.id, {
              data: { blocks: offer.blocks },
            });
            updatedCount++;
          }
        }
      }

      console.log(`Cleaned up ${updatedCount} offers`);
    },
    options: {
      rule: '0 1 * * *', // Runs every day at 1:00 AM
      // rule: "*/10 * * * * *",
    },
  },
};