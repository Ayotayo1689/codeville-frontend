import styled from "styled-components";

export const Container = styled.div`
	margin: 0 auto;
	padding: 40px 90px;
	box-shadow: 4px 0px 8px 3px rgba(0, 0, 0, 0.15),
		1px 0px 3px rgba(0, 0, 0, 0.3);
	@media (min-width: 992px) {
		.hide-desktop {
			display: none;
		}
	}
	@media (max-width: 992px) {
		padding: 1.5rem;
		.hide-mobile {
			display: none;
		}
	}
`;


export const GridZero = styled.div`
	display: grid;
	gap: 1rem;
	max-width: 2000px;
	margin: 0 auto;

	@media (max-width: 600px) {
		grid-template-columns: 100%;
	}

	@media (min-width: 992px) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media (min-width: 992px) {
		grid-template-columns: repeat(4, 1fr);
	}
`;
export const GridOne = styled.div`
  display: grid;
  gap: 1rem;
  max-width: 2000px;
  margin: 0 auto;


  .socials-mobile-view {
    @media (max-width: 600px) {
      display: flex;
      flex-direction: column;
    }
  }

  @media (max-width: 600px) {
    grid-template-columns: 100%;
  }

  @media (min-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 992px) {
		grid-template-columns: repeat(4, 1fr);
	}
`;

export const GridTwo = styled.div`
  display: grid;
  gap: 1rem;
  border-top: 1px solid rgba(0, 0, 0, 0.3);
  padding-top: 1rem;
  max-width: 2000px;
  margin: 0 auto;
  margin-top: 1rem;

  @media (max-width: 600px) {
    grid-template-columns: 100%;
    .mobile-view-terms {
      align-items: center;
    }
  }

  @media (min-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
    margin-top: 3rem;
  }

  @media (min-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
  }

	.secure-image {
		@media (max-width: 600px) {
			// width: 14rem;
			justify-content: center;
		}
	}
`;

export const Links = styled.div`
	display: flex;
	gap: 1.2rem;

	.footer-link {
		@media (max-width: 600px) {
			font-size: 12px;
		}
	}

	@media (max-width: 600px) {
		// flex-direction: column;
		gap: 0.9rem;
		justify-content: center;
	}

	@media (min-width: 992px) {
	}

	@media (min-width: 992px) {
	}
`;

export const Secure = styled.div`
	display: flex;
	flex-direction: column;
	align-items: end;
	gap: 0.5rem;

	@media (max-width: 600px) {
		align-items: center;
		gap: 1rem;
	}

	@media (width: 992px) {
		align-items: start;
		gap: 1rem;
	}

	.legal-enquiries {
		@media (max-width: 600px) {
			font-size: 12px;
			text-align: center;
		}
	}
`;

export const GridThree = styled.div`
	display: grid;
	// gap: 2rem;
	align-items: center;
	max-width: 2000px;
	margin: 0 auto;
	margin-top: 0.5rem;
	// grid-auto-flow: dense;

	@media (max-width: 600px) {
		grid-template-columns: 100%;
	}

	@media (min-width: 992px) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media (min-width: 992px) {
		grid-template-columns: repeat(3, 1fr);
	}

	.copyright {
		@media (max-width: 600px) {
			justify-content: center;

			.copyright-text {
				font-size: 12px;
				text-align: center;
			}
		}
	}

	.socials {
		@media (max-width: 600px) {
			justify-content: center;
			margin-top: 1rem;
		}
	}
`;

export const Platforms = styled.div`
	display: flex;
	gap: 0.9rem;

  @media (max-width: 992px) {
    justify-content: center;
    padding: 2rem 0 1rem 0;
  }
	@media (max-width: 600px) {
      padding-top: 1rem;
	}
`;
