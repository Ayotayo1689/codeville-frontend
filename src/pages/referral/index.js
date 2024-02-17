import LandingLayout from "../../layouts/landing.layout";
import Referrals from "../../components/referralPage";

function Referral() {
	return <Referrals />;
}
Referral.getLayout = function getLayout(page) {
	return <LandingLayout>{page}</LandingLayout>;
};
export default Referral;
